import { Command } from 'commander'

const program = new Command();

program
  .option('--port <port>', 'Port number', 8080)
  .parse(process.argv);

console.log('port:', program.opts().port);
