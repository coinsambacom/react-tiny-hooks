## react-tiny-hooks

Coleção de hooks

## useLocalStorage

Este hook permite armazenar valores em `localStorage` de forma reativa. Ele mantém o estado atualizado com o valor armazenado em `localStorage` e sincroniza automaticamente com outras instâncias do mesmo hook no mesmo domínio.

### Parâmetros

- `key` (string): A chave utilizada para armazenar o valor em `localStorage`.
- `initialValue` (qualquer tipo): O valor inicial a ser utilizado caso não haja um valor armazenado para a chave especificada.

### Retorno

- `[storedValue, setValue]`: Um array contendo o valor atual e uma função para atualizar o valor.

### Exemplo
```jsx
import { useState, useEffect } from "react";
import { useLocalStorage } from "@coinsamba/react-tiny-hooks";

export default function MyComponent() {
  const [value, setValue] = useLocalStorage("myKey", "initialValue");

  useEffect(() => {
    console.log("Value:", value);
  }, [value]);

  const handleClick = () => {
    setValue("new value");
  };

  return (
    <div>
      <button onClick={handleClick}>Set Value</button>
    </div>
  );
}
```

## useWindowSize

Este hook permite obter a dimensão atual da janela do navegador. Ele atualiza o estado sempre que a janela é redimensionada.

### Retorno

- `windowSize` (objeto): Um objeto contendo as propriedades `width` e `height`, representando a largura e altura da janela, respectivamente.

### Exemplo

```jsx
import React from "react";
import { useWindowSize } from "@coinsamba/react-tiny-hooks";

const MyComponent = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
    </div>
  );
};

export default MyComponent;
```

## useInterval

Este hook permite executar uma função de callback repetidamente em um intervalo de tempo especificado.

### Parâmetros

- `callback` (função): A função de callback a ser executada em cada intervalo.
- `delay` (number | null): O intervalo de tempo em milissegundos entre as chamadas da função de callback. Se for `null`, o intervalo é interrompido.

### Retorno

- Nenhum.

### Exemplo

```jsx
import React, { useState } from "react";
import { useInterval } from "@coinsamba/react-tiny-hooks";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);

  return <p>{count}</p>;
};

export default CounterComponent;
```

## useIsClient

Este hook é utilizado no Next.js para verificar se o código está sendo executado no cliente (navegador) ou no servidor.

### Retorno

- `isClient` (boolean): Um valor booleano que indica se o código está sendo executado no cliente (true) ou no servidor (false).

### Exemplo

```jsx
import React from "react";
import { useIsClient } from "@coinsamba/react-tiny-hooks";

const IsClientComponent = () => {
  const isClient = useIsClient();

  return <p>{isClient ? "Client" : "Server"}</p>;
};

export default IsClientComponent;
```

## useDebounce

Este hook é utilizado para adiar a execução de uma função de callback até que tenha ocorrido um intervalo de tempo especificado após a última invocação da função.

### Parâmetros

- `effect` (função): A função de callback a ser adiada.
- `delay` (number): O intervalo de tempo em milissegundos a aguardar antes de executar a função de callback.
- `deps` (array): Uma matriz de dependências opcionais que determina quando a função de callback é atualizada.

### Retorno

- Nenhum.

### Exemplo

```jsx
import React, { useState } from "react";
import { useDebounce } from "@coinsamba/react-tiny-hooks";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  useDebounce(() => {
    // Lógica de busca ou chamada à API aqui
    console.log("Search term:", searchTerm);
  }, 500, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
    </div>
  );
};

export default SearchComponent;
```

## useDeviceDetect

Este hook é utilizado para detectar o tipo de dispositivo em que o aplicativo está sendo executado, como mobile, desktop, Android, iOS, entre outros.

### Retorno

- `device` (object): Um objeto contendo as seguintes propriedades:
  - `isMobile` (boolean): Indica se o dispositivo é móvel.
  - `isDesktop` (boolean): Indica se o dispositivo é desktop.
  - `isAndroid` (boolean): Indica se o dispositivo é Android.
  - `isIos` (boolean): Indica se o dispositivo é iOS.
  - `isSSR` (boolean): Indica se o código está sendo executado no servidor (Server-Side Rendering).

### Exemplo

```jsx
import React from "react";
import { useDeviceDetect } from "@coinsamba/react-tiny-hooks";

const DeviceDetectComponent = () => {
  const { isMobile, isDesktop, isAndroid, isIos, isSSR } = useDeviceDetect();

  return (
    <div>
      <p>Mobile: {isMobile ? "Yes" : "No"}</p>
      <p>Desktop: {isDesktop ? "Yes" : "No"}</p>
      <p>Android: {isAndroid ? "Yes" : "No"}</p>
      <p>iOS: {isIos ? "Yes" : "No"}</p>
      <p>SSR: {isSSR ? "Yes" : "No"}</p>
    </div>
  );
};

export default DeviceDetectComponent;
```

## useToggle

Este hook é utilizado para criar um estado booleano e uma função para alternar o valor desse estado entre `true` e `false`.

### Parâmetros

- `initialState` (boolean) (opcional): O valor inicial do estado booleano. O padrão é `false`.

### Retorno

Um array contendo:

- `state` (boolean): O estado booleano atual.
- `toggle` (function): Uma função para alternar o valor do estado booleano.

### Exemplo

```jsx
import React from "react";
import { useToggle } from "@coinsamba/react-tiny-hooks";

const ToggleComponent = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <p>Toggle: {isToggled ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleComponent;
```
## useOnlineStatus

Este hook é utilizado para obter o status de conectividade online/offline do navegador.

### Retorno

- Um valor booleano indicando o status de conectividade online (`true`) ou offline (`false`).

### Exemplo

```jsx
import React from "react";
import { useOnlineStatus } from "@coinsamba/react-tiny-hooks";

const OnlineStatusComponent = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default OnlineStatusComponent;
```