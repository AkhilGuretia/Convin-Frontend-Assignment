import { Grid } from "@mui/material";
import CustomCard from "../Card";

interface CardListProps {
  cardList: any[];
  onUpdateClick: (id: string, type: string) => Promise<void>;
  onDeleteClick: (id: string, type: string) => Promise<void>;
  onIframeClick: (cardDetails: any) => void;
  onEditClick: (cardDetails: any) => void;
  onShiftCategory: (cardDetails: any) => void;
  checkedList: any[];
  onCheckBoxChange: (cardDetails: any, value: boolean) => void;
}

const CardList = ({
  cardList,
  onDeleteClick,
  onUpdateClick,
  onIframeClick,
  onEditClick,
  onShiftCategory,
  checkedList,
  onCheckBoxChange,
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
              checked={checkedList?.some((checkedItem) => {
                return checkedItem?.id === card?.id;
              })}
              onCheckBoxChange={onCheckBoxChange}
            />
          }
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
