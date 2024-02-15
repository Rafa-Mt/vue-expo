// form-validation-plugin.js
import { ref } from 'vue';

export function useValidation(options) {
    const errors = ref({
      email: null,
      password: null
    });
  
    const validateField = (field, value) => {
      const rules = options.rules[field];
      const messages = options.messages[field];
  
      if (rules.required && !value) {
        errors.value[field] = messages.required;
      } else if (rules.pattern && !rules.pattern.test(value)) {
        errors.value[field] = messages.pattern;
      } else if (rules.minLength && value.length < rules.minLength) {
        errors.value[field] = messages.minLength;
      } else {
        errors.value[field] = null;
      }
    };
  
    return { validateField, errors };
  }










  /*
La lógica sin estado (stateless logic) en programación se refiere a la lógica de un programa que 
no guarda ni depende de ningún estado interno. En otras palabras, dadas las mismas entradas, 
siempre producirá la misma salida, sin importar cuántas veces se llame.

Las funciones o componentes que, dadas las mismas entradas, pueden producir diferentes salidas, 
se conocen generalmente como "stateful" o "con estado". Esto significa que mantienen un estado interno 
que puede cambiar con el tiempo y afectar el resultado de la función. En el contexto de tu archivo activo, 
el composable useCounter es un ejemplo de lógica con estado, ya que mantiene y modifica un estado interno (count).
*/