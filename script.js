async function verify() {
  const input = document.getElementById("certificateInput").value.trim();
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = "⏳ Memeriksa...";

  const response = await fetch("data.json");
  const data = await response.json();

  const found = data.find(item => item.nomor === input);

  if (found) {
    resultBox.innerHTML = `
      ✅ Sertifikat ditemukan!<br/>
      🧑 Nama: <strong>${found.nama}</strong><br/>
      🔖 Nomor: ${found.nomor}<br/>
      📌 Status: <span style="color:green">${found.status}</span>
    `;
  } else {
    resultBox.innerHTML = `❌ Sertifikat tidak ditemukan. Pastikan nomor yang dimasukkan benar.`;
  }
}const messages = {
  id: {
    checking: "⏳ Memeriksa...",
    found: "✅ Sertifikat ditemukan!",
    not_found: "❌ Sertifikat tidak ditemukan. Pastikan nomor yang dimasukkan benar.",
    name: "🧑 Nama",
    number: "🔖 Nomor",
    status: "📌 Status"
  },
  en: {
    checking: "⏳ Checking...",
    found: "✅ Certificate found!",
    not_found: "❌ Certificate not found. Please make sure the number is correct.",
    name: "🧑 Name",
    number: "🔖 Number",
    status: "📌 Status"
  },
  zh: {
    checking: "⏳ 驗證中...",
    found: "✅ 找到證書！",
    not_found: "❌ 找不到證書。請確認輸入的號碼是否正確。",
    name: "🧑 姓名",
    number: "🔖 證書號碼",
    status: "📌 狀態"
  }
};

// Ambil bahasa dari dropdown
function getSelectedLanguage() {
  const select = document.getElementById("languageSwitcher");
  return select ? select.value : "id";
}

// Ambil teks berdasarkan bahasa
function t(key) {
  const lang = getSelectedLanguage();
  return messages[lang] && messages[lang][key] ? messages[lang][key] : key;
}

async function verify() {
  const input = document.getElementById("certificateInput").value.trim();
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = t("checking");

  const response = await fetch("data.json");
  const data = await response.json();

  const found = data.find(item => item.nomor === input);

  if (found) {
    resultBox.innerHTML = `
      ${t("found")}<br/>
      ${t("name")}: <strong>${found.nama}</strong><br/>
      ${t("number")}: ${found.nomor}<br/>
      ${t("status")}: <span style="color:green">${found.status}</span>
    `;
  } else {
    resultBox.innerHTML = t("not_found");
  }
}
