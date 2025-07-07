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
}