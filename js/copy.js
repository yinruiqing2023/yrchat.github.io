     function copyTextToClipboard() {
            const textToCopy = "fishhome666";

            // 创建一个临时文本输入框
            const tempInput = document.createElement("input");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);

            // 选中临时输入框中的文本
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // 兼容移动设备

            // 尝试复制文本到剪贴板
            const successful = document.execCommand("copy");

            // 移除临时输入框
            document.body.removeChild(tempInput);

            // 根据复制是否成功，显示相应提示信息
            if (successful) {
                alert("已成功复制" + textToCopy);
            } else {
                alert("复制失败，请手动复制文本: " + textToCopy);
            }
        }
      
      
      
      
      
      
      
      
      
      
      
      
      function opyTextToClipboard() {
            const textToCopy = "778899";

            // 创建一个临时文本输入框
            const tempInput = document.createElement("input");
            tempInput.value = textToCopy;;
            document.body.appendChild(tempInput);

            // 选中临时输入框中的文本
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // 兼容移动设备

            // 尝试复制文本到剪贴板
            const successful = document.execCommand("copy");

            // 移除临时输入框
            document.body.removeChild(tempInput);

            // 根据复制是否成功，显示相应提示信息
            if (successful) {
                alert("已成功复制");
            } else {
                alert("复制失败，请手动复制文本: " + textToCopy);
            }
        }