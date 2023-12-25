function openPopup() {
            var popup = document.getElementById("popup");
            if (localStorage.getItem("popupShown") == null) {
                popup.style.display = "block";
                localStorage.setItem("popupShown", "true");
            }
        }

        function closePopup() {
            var popup = document.getElementById("popup");
            popup.style.display = "none";
        }