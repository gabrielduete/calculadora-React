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
    
        // State que recebe o Primeiro valor, o operador, o segundo valor e faz a operação
        // 'ultimoNumero' é o resultado da ultima operação
        const [calculo, setCalculo] = useState({
            'primeiroNum': '',
            'operador': '',
            'segundoNum': '',
            'ultimoNumero': ''
        })

        // Função para receber os valores pra exibir no Display e guardar no state Calculo
        const recebeValores = (num) => {
            if(operador === false){
                // Esse IF vai verificar se ja tiver um resultado na tela e clicar em um número, ele vai limpar e colocar o numero digitado
                if(primeiroCalculo){
                    limpaValores(num, true)
                    setPrimeiroCalculo(false)
                }if( num === '.'){
                    // Adicionando ponto para valor Float
                    calculo.primeiroNum += num
                    setNumeroDisplay1(numeroDisplay1 + num)
                    calculo.ultimoNumero = ''
                    }else if (num === 'backspace'){
                    // Exclui o último valor da chave 'primeiroNum' do state calculo
                    setCalculo({ 
                        'primeiroNum': calculo.primeiroNum.slice(0, -1),
                        'operador': '',
                        'segundoNum': ''
                    })
                    setNumeroDisplay1(numeroDisplay1)   
                }else{ 
                    // Adiciona o numero na tela/objeto
                    calculo.primeiroNum += num
                    setNumeroDisplay1(numeroDisplay1 + num)
                    calculo.ultimoNumero = ''
                }
            }else{
                if (num === '.'){
                    // Adicionando ponto para valor Float
                    calculo.segundoNum += num
                    setNumeroDisplay2(numeroDisplay2 + num)
                }else if(num === 'backspace'){
                    // Exclui o último valor da chave 'segundoNum' do state calculo e mantem os outros
                    setCalculo({
                        'primeiroNum': calculo.primeiroNum,
                        'operador': calculo.operador,
                        'segundoNum': calculo.segundoNum.slice(0, -1),
                    })
                }else{
                    // Adiciona o numero na tela/objeto
                    calculo.segundoNum += num
                    setNumeroDisplay2(numeroDisplay2 + num)
                }
            }
        }

        // Função para receber o operador clicado
        const recebeOperador = (num) => {
            calculo['operador'] = num
            setOperadorClicado(num)
            setOperador(true)
            setOperador2(false)
    
            // Verifica se ja houve o primeiro clique no '=', se tiver, ele vai adicionar o ultimo numero e a operação
            // para fazer outro cálculo.
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

        // Função para fazer o calculo com os valores recebidos
        const fazOperacao = (num) => {
            // Objeto com as funções respectivas de cada tipo de operação
            const operacoes = {
                '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
                '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
                '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
                '%': (num1, num2) => (parseFloat(num1) % parseFloat(num2)),
                '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
            }
            
            // Jogando o resultado da operação na tela
            let result = operacoes[calculo['operador']](calculo.primeiroNum, calculo.segundoNum)
            calculo.ultimoNumero = result
            setResultado(result)

            // Ajustando os states de verificação
            setOperador2(true)
            setOperador(false)
            setPrimeiroCalculo(true)
        }

        // Função para limpar o display e valores do objeto, para a próxima operação
        const limpaValores = (num, calculaDnv) => {
            // Esse IF vai verificar se ja tiver um resultado na tela e clicar em um número, ele vai limpar e colocar o numero digitado
            if(calculaDnv){ 
                setCalculo({
                    'primeiroNum': num,
                    'operador': calculo.operador,
                    'segundoNum': '',  
                })

                setPrimeiroClique(false)
                setResultado('')
                setNumeroDisplay1('')
                setNumeroDisplay2('')
                setOperadorClicado('')
            }else{
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
        }
        
        // Função para mostrar mensagem de erro
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