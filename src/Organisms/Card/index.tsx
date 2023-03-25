import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

export interface ICardContent {
  id: number;
  name: string;
  link: string;
  timesPlayed: number;
  category: string;
}

interface ICard {
  cardDetails: ICardContent;
  onEditClick: (cardDetails: any) => void;
  onUpdateClick: (id: string, type: string) => Promise<void>;
  onDeleteClick: (id: string, type: string) => Promise<void>;
  onIframeClick: (cardDetails: any) => void;
  onShiftCategory: (cardDetails: any) => void;
  checked: boolean;
  onCheckBoxChange: (cardDetails: any, value: boolean) => void;
}
const CustomCard = ({
  cardDetails,
  onIframeClick,
  onDeleteClick,
  onEditClick,
  onUpdateClick,
  onShiftCategory,
  onCheckBoxChange,
  checked,
}: ICard) => {
  const theme = useTheme();
  const { id, name } = cardDetails;
  return (
    <Card
      variant="outlined"
      sx={{
        width: theme.spacing(100),
        boxShadow: "0px 12px 16px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
        backgroundColor: "#ECECEC",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <IconButton
          onClick={() => {
            onIframeClick(cardDetails);
          }}
          sx={{ color: "blue", borderRadius: 0 }}
          component="div"
        >
          {"Open Link"}
        </IconButton>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            onEditClick(cardDetails);
          }}
          sx={{ color: "black" }}
        >
          <ModeEditOutlineSharpIcon />
        </Button>
        <Button
          onClick={() => {
            onDeleteClick(cardDetails?.id.toString(), cardDetails?.category);
          }}
          sx={{ color: "black" }}
        >
          <DeleteIcon />
        </Button>
        <Button
          onClick={() => {
            // onDeleteClick(cardDetails?.id.toString(), cardDetails?.category);
            onShiftCategory(cardDetails);
          }}
          sx={{ color: "black" }}
        >
          <DriveFileMoveIcon />
        </Button>
        <Checkbox
          sx={{ marginLeft: 36 }}
          checked={checked}
          onChange={(e) => {
            onCheckBoxChange(cardDetails, e.target.checked);
          }}
        />
      </CardActions>
    </Card>
  );
};
export default CustomCard;
