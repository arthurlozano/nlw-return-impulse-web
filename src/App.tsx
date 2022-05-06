/*
// como tipar:
interface ButtonProps {
  text?: string; //cria propriedade opcional
}
// para usar seria só informar a variável que será tipada com 2 pontos e o tipo (function Button(props: ButtonProps){...})
 
function Button(props: ButtonProps) {
  return <button className="bg-[#8257e6] px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}
*/

import { Widget } from "./components/Widget";

export function App() {
  return <Widget />
}