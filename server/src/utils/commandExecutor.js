const { exec } = require("child_process");

const executeCommand = (command) => {

    command = command.toLowerCase().trim();

    // =========================
    // Normalize Voice Commands
    // =========================

    if (
        command.includes("open youtube") ||
        command === "youtube"
    ) command = "open youtube";

    else if (
        command.includes("open chrome") ||
        command === "chrome"
    ) command = "open chrome";

    else if (
        command.includes("open github") ||
        command === "github"
    ) command = "open github";

    else if (
        command.includes("open chatgpt") ||
        command === "chatgpt"
    ) command = "open chatgpt";

    else if (
        command.includes("open whatsapp") ||
        command === "whatsapp"
    ) command = "open whatsapp";

    else if (
        command.includes("open linkedin") ||
        command === "linkedin"
    ) command = "open linkedin";

    else if (
        command.includes("open fiverr") ||
        command === "fiverr"
    ) command = "open fiverr";

    else if (
        command.includes("open calculator") ||
        command === "calculator"
    ) command = "open calculator";

    else if (
        command.includes("open vscode") ||
        command.includes("open vs code") ||
        command === "vscode"
    ) command = "open vscode";

    else if (
        command.includes("shutdown") ||
        command.includes("shut down") ||
        command.includes("turn off") ||
        command.includes("close laptop") ||
        command.includes("close computer")
    ) command = "shutdown";

    else if (
        command.includes("restart") ||
        command.includes("reboot")
    ) command = "restart";

    else if (
        command.includes("lock")
    ) command = "lock";

    else if (
        command.includes("sleep") ||
        command.includes("hibernate")
    ) command = "sleep";

    else if (
        command.includes("take screenshot") ||
        command.includes("capture screen") ||
        command.includes("screenshot")
    ) command = "screenshot";

    else if (
        command.includes("increase volume") ||
        command.includes("volume up")
    ) command = "volume up";

    else if (
        command.includes("decrease volume") ||
        command.includes("volume down")
    ) command = "volume down";

    else if (
        command.includes("mute")
    ) command = "mute";

    else if (
        command.includes("folder")
    ) command = "folder";

    else if (
        command.includes("file")
    ) command = "file";

    // =========================
    // Execute Commands
    // =========================

    switch (command) {

        case "open chrome":
            exec("start chrome");
            return "Opening Chrome";

        case "open youtube":
            exec("start https://youtube.com");
            return "Opening YouTube";

        case "open github":
            exec("start https://github.com");
            return "Opening GitHub";

        case "open chatgpt":
            exec("start https://chat.openai.com");
            return "Opening ChatGPT";

        case "open whatsapp":
            exec("start https://web.whatsapp.com");
            return "Opening WhatsApp";

        case "open linkedin":
            exec("start https://linkedin.com");
            return "Opening LinkedIn";

        case "open fiverr":
            exec("start https://fiverr.com");
            return "Opening Fiverr";

        case "open calculator":
            exec("calc");
            return "Opening Calculator";

        case "open vscode":
            exec("code");
            return "Opening VS Code";

        case "shutdown":
            exec("shutdown /s /t 10");
            return "Computer will shutdown in 10 seconds.";

        case "restart":
            exec("shutdown /r /t 10");
            return "Computer will restart in 10 seconds.";

        case "lock":
            exec("rundll32.exe user32.dll,LockWorkStation");
            return "Computer Locked.";

        case "sleep":
            exec("rundll32.exe powrprof.dll,SetSuspendState 0,1,0");
            return "Computer is going to sleep.";

        case "screenshot":
            exec(`powershell -command "Add-Type -AssemblyName System.Windows.Forms; Add-Type -AssemblyName System.Drawing; $bmp = New-Object Drawing.Bitmap([System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Width,[System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Height); $graphics=[Drawing.Graphics]::FromImage($bmp); $graphics.CopyFromScreen(0,0,0,0,$bmp.Size); $bmp.Save('C:\\Users\\Public\\Desktop\\Screenshot.png')"`);
            return "Screenshot Saved.";

        case "volume up":
            exec(`powershell -c "(New-Object -ComObject WScript.Shell).SendKeys([char]175)"`);
            return "Volume Increased.";

        case "volume down":
            exec(`powershell -c "(New-Object -ComObject WScript.Shell).SendKeys([char]174)"`);
            return "Volume Decreased.";

        case "mute":
            exec(`powershell -c "(New-Object -ComObject WScript.Shell).SendKeys([char]173)"`);
            return "Muted.";

        case "folder": {

            const folderPath = process.env.DEFAULT_FOLDER;

            exec(`explorer "${folderPath}"`);

            return "Folder Opened.";
        }

        case "file": {

            const filePath = process.env.DEFAULT_FILE;

            exec(`start "" "${filePath}"`);

            return "File Opened.";
        }

        default:
            return "Command not found.";
    }

};

module.exports = executeCommand;