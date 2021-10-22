import React, { useState }from 'react'
import './App.css'

import Display from './componentes/display/display'
import Botoes from './componentes/botoes/botoes'

function App(){
  const [numeroDisplay1, setNumeroDisplay1] = useState('')
  const [numeroDisplay2, setNumeroDisplay2] = useState('')
  const [operadorClicado, setOperadorClicado] = useState('') 
  const [resultado, setResultado] = useState('0')
  const [operador, setOperador] = useState(false)
  const [operador2, setOperador2] = useState(true)
  const [primeiroClique, setPrimeiroClique] = useState(false)
  const [calculo, setCalculo] = useState({
    'primeiroNum': '',
    'operador': '',
    'segundoNum': '',
    'ultimoNumero': ''
  })

  const calcula = (num) => {
    if (!isNaN(num) || num === '.' || num === 'backspace'){
      if(operador === false){
        if( num === '.'){
          calculo.primeiroNum += num
          setNumeroDisplay1(numeroDisplay1 + num)
          calculo.ultimoNumero = ''
        }else if ( num === 'backspace'){
          setCalculo({
            'primeiroNum': calculo.primeiroNum.slice(0, -1),
            'operador': '',
            'segundoNum': ''
          })
          setNumeroDisplay1(numeroDisplay1)   
        }else{
          calculo.primeiroNum += num
          setNumeroDisplay1(numeroDisplay1 + num)
          calculo.ultimoNumero = ''
        }
      }else{
        if (num === '.'){
          calculo.segundoNum += num
          setNumeroDisplay2(numeroDisplay2 + num)
        }else if(num === 'backspace'){
          setCalculo({
            'primeiroNum': calculo.primeiroNum,
            'operador': calculo.operador,
            'segundoNum': calculo.segundoNum.slice(0, -1),
          })
        }else{
          calculo.segundoNum += num
          setNumeroDisplay2(numeroDisplay2 + num)
          }
        }
    }else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '%') & operador2){
      calculo['operador'] = num
      setOperadorClicado(num)
      setOperador(true)
      setOperador2(false)

      if(primeiroClique){
        setCalculo({
          'primeiroNum': calculo.ultimoNumero,
          'operador': calculo.operador,
          'segundoNum': '',
        })
        setNumeroDisplay1(calculo.ultimoNumero)
        setNumeroDisplay2('')   
      }

      setPrimeiroClique(true)
    }else if(num === 'C'){
      setCalculo({
        'primeiroNum': '',
        'operador': calculo.operador,
        'segundoNum': '',

      })

      setPrimeiroClique(false)
      setResultado('0')
      setNumeroDisplay1('')
      setNumeroDisplay2('')
      setOperadorClicado('')
        
    }else if(num === '='){
      const operacoes = {
        '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
        '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
        '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
        '%': (num1, num2) => (parseFloat(num1) % parseFloat(num2)),
        '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
      }

      
     
      let result = operacoes[calculo['operador']](calculo.primeiroNum, calculo.segundoNum)
      calculo.ultimoNumero = result
      setResultado(result)

      setOperador2(true)
      setOperador(false)
    }
  }

  return(
    <main className = 'container'>
      
      <section className = 'calculadora'>
        <Display
          resultado = {resultado} 
          numero1 = {calculo.primeiroNum}
          numero2 = {calculo.segundoNum}
          operador = {operadorClicado}
        />
        <Botoes calcula = {calcula} />
      </section>

    </main>
  )
}

export default App