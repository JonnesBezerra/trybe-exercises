let piece = "KING";

switch (piece.toLowerCase()) {
    case "queen":
        console.log(piece + " -> Todas as direções quantas casas quiser"); 
        break;
    case "king":
        console.log(piece + " -> Todas as direções apenas 1 casa"); 
        break;
    case "rook":
        console.log(piece + " -> Verticais e Horizontais quantas casas quiser"); 
        break;
    case "bishop":
        console.log(piece + " -> Diagonais quantas casas quiser"); 
        break;
    case "horse":
        console.log(piece + " -> Um-dois ou em L"); 
        break;
    case "pawn":
        console.log(piece + " -> Uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas"); 
        break;
    default:
        console.log(piece + " -> ERRO peça inválida"); 
        break;
}