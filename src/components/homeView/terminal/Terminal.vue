<template>
    <div class="terminal">
      <pre class="output">{{ terminalOutput }}</pre>
    </div>
  </template>
  
  <script>
  export default {
    name: "TerminalView",
    data() {
      return {
        commands: [
          "systemctl stop sshd",
          "systemctl status sshd",
          "stranger@JOI-ubuntu:-$ ssh root@200.9.155.44 -p 22",
          "The authenticity of host '200.9.155.44 (200.9.155.44)' can't be established.",
          "ECDSA key fingerprint is SHA256:30TU65MUNxQzdq7l1lJI5k7z04CFABIJnyuQj0t6m5U.",
          "Are you sure you want to continue connecting (yes/no/[fingerprint])? yes",
          "Warning: Permanently added '200.9.155.44' (ECDSA) to the list of known hosts.",
          "root@200.9.155.44's password:",
          "_inux infra.seniorhost.com.br 4.19.0-17-amd64 #1 SMP Debian 4.19.194-1 (2021-06- 10) x86_64",
          "The programs included with the Debian GNU/Linux system are free software;",
          "Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.",
          "Last login: Sun Jun 27 21:48:49 2021 from",
          "root@curriculo:~#",
        ],
        terminalOutput: "",
        index: 0,
      };
    },
    mounted() {
      this.typeCommands();
    },
    methods: {
      typeCommands() {
        const interval = setInterval(() => {
          if (this.index < this.commands.length) {
            this.terminalOutput += this.commands[this.index] + "\n";
            this.index++;
          } else {
            clearInterval(interval);
            // Aqui você pode redirecionar para a página principal
            this.$emit("loadingComplete");
          }
        }, 500); // Intervalo entre os comandos
      },
    },
  };
  </script>
  
  <style scoped>
  .terminal {
    background-color: black;
    color: #00ff00;
    font-family: "Courier New", Courier, monospace;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
  }
  
  .output {
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 1.5;
  }
  </style>
  