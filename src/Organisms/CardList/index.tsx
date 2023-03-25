import { Grid } from "@mui/material";
import CustomCard from "../Card";

interface CardListProps {
  cardList: any[];
  onUpdateClick: (id: string, type: string) => Promise<void>;
  onDeleteClick: (id: string, type: string) => Promise<void>;
  onIframeClick: (cardDetails: any) => void;
  onEditClick: (cardDetails: any) => void;
  onShiftCategory: (cardDetails: any) => void;
}

const CardList = ({
  cardList,
  onDeleteClick,
  onUpdateClick,
  onIframeClick,
  onEditClick,
  onShiftCategory,
}: CardListProps) => {
  return (
    <Grid container spacing={4}>
      {cardList.map((card) => (
        <Grid item key={`Card-${card?.id}-${card?.name}`}>
          {
            <CustomCard
              onDeleteClick={onDeleteClick}
              onUpdateClick={onUpdateClick}
              onEditClick={onEditClick}
              onIframeClick={onIframeClick}
              cardDetails={card}
              onShiftCategory={onShiftCategory}
            />
          }
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
