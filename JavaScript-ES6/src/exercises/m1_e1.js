export default function exercicio() {
  console.clear();
  console.log('------------- 1 -------------');
  class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  
    isAdmin() {
      return this.admin === true;
    }
  }
  
  class Admin extends Usuario{
    constructor(email, senha) {
      super(email, senha);
  
      this.admin = true;
    }
  }
  
  
  const User1 = new Usuario('email@teste.com', 'senha123');
  const Adm1 = new Admin('email@teste.com', 'senha1234');
  
  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true
  
  console.log(User1);
  console.log(Adm1);
}