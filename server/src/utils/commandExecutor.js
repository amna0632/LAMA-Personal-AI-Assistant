const { exec } = require("child_process");

const executeCommand = (command) => {
    command = command.toLowerCase().trim();

    // =========================
    // Normalize Voice Commands (Using Regex Word Boundaries)
    // =========================

    if (
        /\bopen youtube\b/.test(command) ||
        command === "youtube"
    ) command = "open youtube";

    else if (
        /\bopen chrome\b/.test(command) ||
        command === "chrome"
    ) command = "open chrome";

    else if (
        /\bopen github\b/.test(command) ||
        command === "github"
    ) command = "open github";

    else if (
        /\bopen chatgpt\b/.test(command) ||
        command === "chatgpt"
    ) command = "open chatgpt";

    else if (
        /\bopen whatsapp\b/.test(command) ||
        command === "whatsapp"
    ) command = "open whatsapp";

    else if (
        /\bopen linkedin\b/.test(command) ||
        command === "linkedin"
    ) command = "open linkedin";

    else if (
        /\bopen fiverr\b/.test(command) ||
        command === "fiverr"
    ) command = "open fiverr";

    else if (
        /\bopen calculator\b/.test(command) ||
        command === "calculator"
    ) command = "open calculator";

    else if (
        /\bopen vscode\b/.test(command) ||
        /\bopen vs code\b/.test(command) ||
        command === "vscode"
    ) command = "open vscode";

    else if (
        /\bshutdown\b/.test(command) ||
        /\bshut down\b/.test(command) ||
        /\bturn off laptop\b/.test(command) ||
        /\bturn off computer\b/.test(command)
    ) command = "shutdown";

    else if (
        /\brestart\b/.test(command) ||
        /\breboot\b/.test(command)
    ) command = "restart";

    else if (
        /\block computer\b/.test(command) ||
        /\block screen\b/.test(command) ||
        command === "lock"
    ) command = "lock";

    else if (
        /\bsleep\b/.test(command) ||
        /\bhibernate\b/.test(command)
    ) command = "sleep";

    else if (
        /\btake screenshot\b/.test(command) ||
        /\bcapture screen\b/.test(command) ||
        command === "screenshot"
    ) command = "screenshot";

    else if (
        /\bincrease volume\b/.test(command) ||
        /\bvolume up\b/.test(command)
    ) command = "volume up";

    else if (
        /\bdecrease volume\b/.test(command) ||
        /\bvolume down\b/.test(command)
    ) command = "volume down";

    else if (
        /\bmute\b/.test(command)
    ) command = "mute";

    else if (
        /\bopen folder\b/.test(command)
    ) command = "folder";

    else if (
        /\bopen file\b/.test(command)
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
