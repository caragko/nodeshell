//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remote the newline

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});
