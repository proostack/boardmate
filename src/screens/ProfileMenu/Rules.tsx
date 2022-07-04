import React from 'react'
import { Text,Center,Box, FlatList, Button, ScrollView} from "native-base";
import RulesHeader from '../../components/profileMenu/rules/RulesHeader';
import RulesText from '../../components/profileMenu/rules/RulesText';
import RulesSubHeader from '../../components/profileMenu/rules/RulesSubHeader';
import { SafeAreaView } from 'react-native';

const Rules = ():JSX.Element => {
  return (
    <SafeAreaView style={{flex:1}}>
<ScrollView>

    <Box flex={1} px="23px"  bgColor="darkTheme.50">

      <Box mt="30px">
      <RulesHeader>Basic chess rules</RulesHeader>

<Box mt="20px">
<RulesText>In chess, each player takes turns to make a single move. Players cannot choose to skip a turn - they must move a piece. Each chess piece moves in a specific way, and must be moved according to its legal movement.

Except for the knight, which may jump over pieces, pieces cannot move through pieces of either colour without either stopping (in the same of a piece of the same colour) or capturing them (in the case of a piece of the opposite colour).</RulesText>
</Box>
      </Box>

      <Box mt="40px">
      <RulesHeader>How to capture pieces</RulesHeader>
      <Text mt="20px">
      <RulesText>If a piece lands on a space with an opponent’s piece, that piece is captured and removed from the board. Pieces cannot be placed on the same square as a piece of the same colour. When a piece captures an opponent’s piece, it must finish its current move action and end the player’s turn.
</RulesText>
      </Text>
      </Box>


  <Box mt="40px">
  <RulesHeader>How to move chess pieces</RulesHeader>
  <Text mt="30px">
  <RulesSubHeader>Pawns</RulesSubHeader>
  </Text>
<Text mt={"10px"}>
<RulesText>
Pawns move one square forward in a straight line. They cannot move horizontally, diagonally or backwards.

An exception to this is if a pawn is yet to be moved during the game. If a pawn has not yet moved, it may be moved two squares forward as a single move. Both squares must be empty. The player can also choose to move the piece a single square.

The only time a pawn may move diagonally is when capturing an opponent’s piece. Pawns may capture an opponent’s piece on either of the diagonal spaces to the left or right ahead of the piece. As part of capturing the piece, the pawn will move diagonally to replace the captured piece. A pawn cannot capture an adjacent piece on any other square, or move diagonally without capturing.
</RulesText>
</Text>

  </Box>

<Box mt={"20px"}>
  <RulesSubHeader>Rook (Castle)</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    The rook, sometimes called the castle, can move any number of squares horizontally along its current row (rank) or column (file). It cannot pass through pieces of the same colour, and can capture pieces of the opposite colour by moving onto an occupied space. It cannot move diagonally for any reason.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>Rook (Castle)</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    Knights are the only chess piece that may be moved ‘through’ other pieces by ‘jumping’ over them. It captures pieces as normal by landing on a space occupied by a piece of the opposite colour and cannot move to a square occupied by a piece of the same colour, but may move over pieces of either colour during its move.

Knights move in a fixed ‘L’ pattern: two squares forward, backward, left or right, then one square horizontally or vertically, or vice versa - one square forward, backward, left or right, followed by two squares horizontally or vertically to complete the ‘L’ shape.

This means that the knight can always move to the closest square that is not on its current row (rank), column (file) or directly adjacent diagonally.

The knight must move the full distance - it cannot move just two squares in a straight line without also moving one to the side, for instance.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>Bishop</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    The bishop can move any number of squares diagonally - this means it always moves along the diagonal line of squares matching the current colour of its square. This means that each player begins the game with one bishop that can move on each colour. A bishop cannot move horizontally or vertically for any reason. It cannot move through pieces of the same colour, and captures a piece of the opposite colour by moving onto its square.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>Queen</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    The queen may move any number of squares horizontally, vertically or diagonally. These movements must be made in a single straight line during a single turn. (In other words, you can’t move three squares diagonally, followed by three spaces vertically.) The queen cannot move through pieces of the same colour, and captures a piece of the opposite colour by moving onto its square.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>King</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    The king moves a single space horizontally, vertically or diagonally. The king cannot move into a space that would grant a check or checkmate to the opponent player.

As an exception to all other chess pieces, the king is never captured - a player loses the match when the king is placed into checkmate, which would lead to an unavoidable capture on the opponent’s next turn.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>What is check and checkmate?</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    When a piece moves in a way that would allow a player to capture the opponent’s king on their next turn, the attacking player typically announces “check”.

The player placed into check must move their king or move another piece to stop the attack on their next turn - either by blocking the move or capturing the attacking piece.

If a player creates a situation where their opponent cannot stop their king from being captured on the next turn, the attacking player announces “checkmate” and immediately wins the game. The king is never captured - a game of chess is won when a successful checkmate is announced.

A player can also choose to resign, granting their opponent the victory. Matches can also end in an agreed draw - for example, as the result of stalemate leaving a player without any legal moves, or if no player can win using available legal moves, a situation known as a “dead position”. One example of a dead position is when both players are left with their king as their only remaining piece on the board.

Draws can also occur as the result of advanced rules typically used in professional tournaments, including identical board positions occurring three or five times - rules known respectively as threefold repetition and fivefold repetition - or no captures or pawn moves taking place within the last 50 or 75 moves. The exact rules used can depend on the tournament and agreement between the players.
    </RulesText>
  </Text>
</Box>


<Box mt={"20px"}>
  <RulesSubHeader>How to promote a pawn</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    If a pawn reaches the opposite edge of the board - the farthest row (rank) from the controlling player - it is promoted to another piece: a rook, knight, bishop or queen. The new piece replaces the pawn on its current square, and follows the movement rules for the respective piece.

While most casual players use captured pieces to represent promoted pieces, a pawn can legally be promoted to any piece regardless of whether it has been captured. For example, a player may have multiple queens as the result of promoting pawns, or multiple bishops able to move along diagonal lines of the same colour depending on the square on which the pawn was promoted.

There is no limit to the number of pawns that can be promoted.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>What is En passant?</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    En passant - French for ‘in passing’ - is one of the most famous moves in chess. En passant occurs when a pawn moves two squares forward as the result of its optional starting move.

If an opponent’s pawn would have been able to legally capture the moving pawn had it only moved one square instead of two, the opponent can declare en passant on their next turn and move their pawn diagonally onto the square that the pawn passed through - capturing the pawn as if it had only moved one square.

En passant must be declared and made as the opponent’s next turn to be legal - otherwise, the player with the chance to capture the pawn loses the opportunity.
    </RulesText>
  </Text>
</Box>

<Box mt={"20px"}>
  <RulesSubHeader>What is Castling?</RulesSubHeader>
  <Text mt={"10px"}>
    <RulesText>
    Castling is perhaps the most complicated basic rule in chess, and a rule that many beginners often overlook as a result.

Castling is permitted when a player’s king piece and a rook have not yet moved during the game. Castling can be performed with either rook, as long as they haven’t moved - in other words, they are still in their starting corners on the edge closest to the controlling player.

Castling involves a player moving the king piece two squares towards the rook with which they are castling, before moving the rook to the square that the king moved ‘through’. This effectively puts the rook adjacent on the other side of the king, while the king moves two squares towards the space in which the rook started the game. Regardless of whether castling is performed with the rook closer to the king (kingside) or one square further away (queenside), the king only ever moves two spaces.

The king cannot be used in a castling manoeuvre if it is currently in check, but a rook can be used in castling even if it is under threat from an opponent’s piece - in other words, if it could be captured on the opponent’s next turn, or on any of the squares it passes through while performing the move.

As usual, castling cannot be used to move the king if it would put the king into check. Castling also cannot be used if there are any pieces between the king and the rook - the squares between must be clear.
    </RulesText>
  </Text>
</Box>
    </Box>
</ScrollView>

    </SafeAreaView>

  )
}

export default Rules