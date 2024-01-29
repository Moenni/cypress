/*
inicio de sesion
Feature: Inicio de Sesión

  Scenario: Iniciar sesión con credenciales válidas
    Given que estoy en la página de inicio
    When ingreso el nombre de usuario "usuario"
      And ingreso la contraseña "contraseña"
      And hago clic en el botón de inicio de sesión
    Then debería ver la página de inicio
*/

public class inicio sesion {
private webDriver driver;
@Given("que estoy en la página de inicio")
    public void navigateToHomePage() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.get("url/to/homepage");
    }
    
    @when ("ingreso el nombre de usuaeio")
    public void ingresarNombre(string usuario){
    driver.findElement(ById(usuario)).sendkeys(usuario);
    }
    
      @and ("ingreso la contraseña")
    public void ingresarPassword(string contraseña){
    driver.findElement(ById(contraseña)).sendkeys(contraseña);
    }
     @and ("hago click en el boton de inicio de sesion")
    public void hacerClick(){
    driver.findElement(ById(boton)).click();
    }
    
    @then("deberia ver la pagina de inicio de sesion")
    public void verificarInicioSesion(){
    driver.findElement(ById(perfil)).exists;
    }
}


Feature: Carrito de Compras

  Scenario: Agregar un producto al carrito
    Given que estoy en la página de productos
    When selecciono el producto "Camiseta"
      And hago clic en el botón "Agregar al Carrito"
    Then debería ver el producto en mi carrito de compras
    
    
    
    @Given("que estoy en la página de productos")
    public void navigateToHomePage() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.get("url/to/homepage");
    }
    
    @when ("selecciono el producto {string}")
    public void agregarCamiseta(string camiseta){
    driver.findElement(ById("id_de_camiseta")).click();
    }
    
    @and ("and hago click en el boton {string}")
    public void agregarAlCarrito(){
    driver.findElement(By.id("id_de_agregar_al_carrito")).click();
    }
    
    @then ("deberia ver el producto en mi carrito de compras")
    public void VerificarCarrito(){
    webElement camiseta= driver.findElement(By.id("id_de_camiseta"));
    Assert(camiseta.isdisplayed());
    }