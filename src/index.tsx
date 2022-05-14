// 以下2行は、JSXを使う場合にインポートが必要
import * as React from "react"
import { render } from "react-dom"

const Main = (<h1>Markdown Editor</h1>)

render(Main, document.getElementById('app'))