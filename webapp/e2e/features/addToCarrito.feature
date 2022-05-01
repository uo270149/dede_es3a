Feature: Añadir a carrito

Scenario: Usuario no loggeado añade carrito
    Given Dado un usuario no loggeado
    When Añado producto a carrito
    Then Se ve en el carrito