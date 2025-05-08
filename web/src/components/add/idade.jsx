const getIdade = () => {
    const dataNascimento = new Date('2004-08-01'); 
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
  
    return idade;
  };
  
  export default getIdade;