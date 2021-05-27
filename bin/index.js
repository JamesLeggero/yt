#!/usr/bin/env node

const { exec } = require('child_process')

exec(`youtube-dl --extract-audio --audio-format wav --no-check-certificate -o "~/Desktop/%(title)s.%(ext)s" "${process.argv[2]}"`,
    (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
