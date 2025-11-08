    function addComment() {
        const author = document.getElementById("authorInput").value.trim();
        const text = document.getElementById("commentInput").value.trim();
    
        if (!author || !text) {
            alert("Isi nama dan komentar terlebih dahulu!");
            return;
        }
    
        //  URL Web App SHEET
        const scriptURL = "https://script.google.com/macros/s/AKfycbz6XacaeoJGBlMnIfLOj6KfiJ__gcqjFnLS02jKlv5o9KKS9bylJ2Xu593H6OUQXrDl/exec";
    
        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({author, text}),
            headers: {"Content-Type": "application/json"},
        })
        .then(res => res.text())
        .then(() => {
            alert("Komentar berhasil dikirim! Terima kasih 😊");
            document.getElementById("authorInput").value = "";
            document.getElementById("commentInput").value = "";
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Terjadi kesalahan saat mengirim komentar.");
        });
    }