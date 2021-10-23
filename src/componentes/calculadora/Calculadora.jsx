import React, { useState } from 'react'
import './style.css'

import Display from '../display/display'
import Botoes from '../botoes/botoes'

function Calculadora(){
        //States para o Display
        const [numeroDisplay1, setNumeroDisplay1] = useState('')
        const [numeroDisplay2, setNumeroDisplay2] = useState('')
        const [operadorClicado, setOperadorClicado] = useState('') 
        const [resultado, setResultado] = useState('')
    
        // States usados para verificar situações
        const [operador, setOperador] = useState(false)
        const [operador2, setOperador2] = useState(true)
        const [primeiroClique, setPrimeiroClique] = useState(false)
        const [primeiroCalculo, setPrimeiroCalculo] = useState(false)
    
        // State com o calculo
        const [calculo, setCalculo] = useState({
            'primeiroNum': '',
            'operador': '',
            'segundoNum': '',
            'ultimoNumero': ''
        })

        const recebeValores = (num) => {
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
        }

        const recebeOperador = (num) => {
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
        }

        const fazOperacao = (num) => {
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
            setPrimeiroCalculo(true)
        }

        const limpaValores = () => {
            setCalculo({
                'primeiroNum': '',
                'operador': calculo.operador,
                'segundoNum': '',  
            })

            setPrimeiroClique(false)
            setResultado('')
            setNumeroDisplay1('')
            setNumeroDisplay2('')
            setOperadorClicado('')
        }
        
        const mostraError = () => {
            setResultado('Error')
        }
     
        // Função com as operações
        const calcula = (num) => {
            if (!isNaN(num) || num === '.' || num === 'backspace'){
                recebeValores(num)
            }else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '%') & operador2){
                recebeOperador(num)
            }else if(num === 'C'){
                limpaValores()
            }else if(num === '='){
                if(calculo.segundoNum !== ''){
                    fazOperacao(num)
                }else{
                    mostraError()
                }
            }
        }
    
    return(
        <section className = 'calculadora'>
            <Display
                resultado = {resultado} 
                numero1 = {calculo.primeiroNum}
                numero2 = {calculo.segundoNum}
                operador = {operadorClicado}
            />
            <Botoes calcula = {calcula} />
      </section>
    )
}

export default Calculadora