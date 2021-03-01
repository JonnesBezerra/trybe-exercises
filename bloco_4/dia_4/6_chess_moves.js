let piece = "Queen";

console.log(chessMoves(piece));

function chessMoves(piece) {
    switch (piece.toLowerCase()) {
        case "queen":
            return piece + " -> Todas as direções quantas casas quiser";
            break;
        case "king":
            return piece + " -> Todas as direções apenas 1 casa";
            break;
        case "rook":
            return piece + " -> Verticais e Horizontais quantas casas quiser";
            break;
        case "bishop":
            return piece + " -> Diagonais quantas casas quiser";
            break;
        case "horse":
            return piece + " -> Um-dois ou em L";
            break;
        case "pawn":
            return piece + " -> Uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas";
            break;
        default:
            return piece + " -> ERRO peça inválida";
            break;
    }
}