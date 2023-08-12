import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto){
   const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
   const capturas = [...texto.matchAll(regex)];
   const resultados = capturas.map( captura => ({
      [captura[1]]: captura[2]  }));
   return resultados.length != 0? resultados : 'não há links no arquivo' ;
}

function trataErro(erro){
   throw new Error(chalk.red(erro.code, 'erro pelo func trataErro'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo){
   try{
    const endcoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, endcoding);
    return extraiLinks(texto);
   } catch(erro){
      trataErro(erro);
   } finally{
      console.log(chalk.yellow('pegou o arquivo'))
   }
   
}

 //--    \(https?:\/\/[^\s?#.].[^\s]*\)
 //--    \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)

export default pegaArquivo;
