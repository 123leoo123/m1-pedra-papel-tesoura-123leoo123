function playRockPaperScissor(player1, player2){
    const parametroTratado1 = player1.charAt(0).toUpperCase() + player1.slice(1).toLowerCase();
    const parametroTratado2 = player2.charAt(0).toUpperCase() + player2.slice(1).toLowerCase();
    
    if (parametroTratado1 == 'Pedra' && parametroTratado2 == 'Tesoura' || parametroTratado1 == 'Papel' && parametroTratado2 == 'Pedra' || parametroTratado1 == 'Tesoura' && parametroTratado2 == 'Papel'){
        return 'Jogador 1 venceu!';
    }
    if (parametroTratado1 == 'Pedra' && parametroTratado2 == 'Papel' || parametroTratado1 == 'Papel' && parametroTratado2 == 'Tesoura' || parametroTratado1 == 'Tesoura' && parametroTratado2 == 'Pedra'){
        return 'Jogador 2 venceu!';
    }
    else if (parametroTratado1 == 'Pedra' && parametroTratado2 == 'Pedra' || parametroTratado1 == 'Papel' && parametroTratado2 == 'Papel' || parametroTratado1 == 'Tesoura' && parametroTratado2 == 'Tesoura'){
        return 'Empate!';
    }
        }


