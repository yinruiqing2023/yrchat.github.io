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
            const textToCopy = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ5b3V3aWxsZmluZHdheTJAb3V0bG9vay5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1HY1prRVQzejJyRVdYTXUxTkpZanZQOVMifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDY0Yjc4MTYxOWVlMzY2NzlhYmNmMmQwYiIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODk3NDkzNDcsImV4cCI6MTY5MDk1ODk0NywiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvcmdhbml6YXRpb24ud3JpdGUgb2ZmbGluZV9hY2Nlc3MifQ.ZsToEiQWPswMchQiikuvcF98utzIpwKpGBvujhdk3EibkE272lBlMyGDxgpsaNB5z-236TuT6kG6F7t0qywvlMc64f_aofLdc5gn_yUuRxE5vTJVMhjf3ZQ39j730E5OH0Lff7hf4tzq6ZTLtMQ5cLe91Co5BkN_Li5zV7KBBjVhatITEoOiEWgD7UVBBaNMo6gjpyWHI81mU5HOdklMUmRXTXQeGrDy2rq6-ko5sWEqBTYSutfkg1xz41qLTdfQXZJyFUudBV4OQQx8Pj6SkN9cDuVoZoqPzfV3Vvx95N8Wfcn1K_M84GhzkgS2EplX_22zC3Vy4JInlyzdXZKLqA";

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
                alert("已成功复制");
            } else {
                alert("复制失败，请手动复制文本: " + textToCopy);
            }
        }