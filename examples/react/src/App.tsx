import { CheckTwo, CloseTwo, Programmer } from "@abulo-space/react";
import { IconProvider } from "@abulo-space/react";

function App() {

  return (
    <div className="App">
        <IconProvider value={{
            tag: 'i',
            size: 30,
            colors: {
                outline: {
                    fill: '#ff0000'
                }
            }
        }}>
            <CheckTwo></CheckTwo>
            <CloseTwo></CloseTwo>
            <Programmer></Programmer>
        </IconProvider>
    </div>
  )
}

export default App
