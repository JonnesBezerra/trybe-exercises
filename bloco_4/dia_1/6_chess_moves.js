let piece = {
    queen: "Queens move diagonally, horizontally, or vertically any number of squares",
    king: "Kings move one square in any direction",
    rook: "Rooks move horizontally or vertically any number of squares",
    bishop: "Bishops move diagonally any number of squares",
    knight: "Knights move in an ‘L’ shape’",
    pawn: "Pawns move vertically forward one square, with the option to move two squares if they have not yet moved"
};
let pieceName = 'Pawn';

switch (pieceName.toLowerCase()) {
    case 'queen':
        console.log(piece.queen);
        break;
    case 'king':
        console.log(piece.king);
        break;
    case 'rook':
        console.log(piece.rook);
        break;
    case 'bishop':
        console.log(piece.bishop);
        break;
    case 'knight':
        console.log(piece.knight);
        break;
    case 'pawn':
        console.log(piece.pawn);
        break;
    default:
        console.log("ERRO Invalid piece!");
        break;
}