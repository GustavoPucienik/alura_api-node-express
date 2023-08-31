const socket = io();

function emitirCadastrarUsuario(dados){
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro ao cadastrar!"));
socket.on("usu-ja-existe", () => alert("Esse nome já é utilizado por outro usuario") );

export { emitirCadastrarUsuario };
