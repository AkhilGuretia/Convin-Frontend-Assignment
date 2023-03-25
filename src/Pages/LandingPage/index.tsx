import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CardList from "../../Organisms/CardList";

const LandingPage = () => {
  const [entertainmentBucket, setEntertainmentBucket] = useState<any>([]);
  const [motivationBucket, setMotivationBucket] = useState<any>([]);
  const [educationBucket, setEducationBucket] = useState<any>([]);
  const [cardCreationPayload, setCardCreationPayload] = useState<any>({
    name: "",
    link: "",
    category: "",
    timesPlayed: 0,
  });
  const [isIframeModalOpen, setIsIFrameModalOpen] = useState(false);
  const [currentlyOpenCard, setCurrentlyOpenCard] = useState<any>();
  const [isEditDetailsModalOpen, setIsEditDetailsModalOpen] = useState(false);
  const [iscreateCardModalOpen, setIsCreateCardModalOpen] = useState(false);
  const [isShiftCategoryModalOpen, setIsShiftCategoryModalOpen] =
    useState(false);
  const [shiftedCategory, setShiftedCategory] = useState<any>(null);
  const intitalizeData = async () => {
    let entertainment = axios.get(`http://localhost:3001/entertainment`);
    let education = axios.get(`http://localhost:3001/education`);
    let motivation = axios.get(`http://localhost:3001/motivation`);

    await Promise.all([entertainment, education, motivation])
      .then((res) => {
        setEntertainmentBucket(res[0].data);
        setMotivationBucket(res[2].data);
        setEducationBucket(res[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdate = async (id: string, type: string) => {
    setIsEditDetailsModalOpen(true);
    await axios.put(
      `http://localhost:3001/${currentlyOpenCard?.category}/${id}`,
      {
        name: currentlyOpenCard?.name,
        link: currentlyOpenCard?.link,
        category: currentlyOpenCard?.category,
        timesPlayed: currentlyOpenCard?.timesPlayed,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const onDelete = async (id: string, type: string) => {
    await axios.delete(`http://localhost:3001/${type}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    intitalizeData();
  };
  const onIframeClick = (cardDetails: any) => {
    setIsIFrameModalOpen(true);
    setCurrentlyOpenCard(cardDetails);
  };
  const onEditClick = (cardDetails: any) => {
    setCurrentlyOpenCard(cardDetails);
    setIsEditDetailsModalOpen(true);
  };
  const onShiftCategoryClick = (cardDetails: any) => {
    setIsShiftCategoryModalOpen(true);
    setCurrentlyOpenCard(cardDetails);
  };

  const updateTimesPlayed = async () => {
    await axios.put(
      `http://localhost:3001/${currentlyOpenCard?.category}/${currentlyOpenCard?.id}`,
      {
        ...currentlyOpenCard,
        timesPlayed: currentlyOpenCard?.timesPlayed + 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    intitalizeData();
  }, []);

  useEffect(() => {
    if (isIframeModalOpen && currentlyOpenCard) {
      console.log(currentlyOpenCard);
      updateTimesPlayed();
      intitalizeData();
    }
  }, [isIframeModalOpen]);

  return (
    <Grid
      sx={{ width: "100%" }}
      container
      direction="column"
      justifyContent={"space-between"}
      spacing={24}
      padding={5}
    >
      {/* Iframe modal*/}
      <Modal
        open={isIframeModalOpen}
        onClose={async () => {
          setIsIFrameModalOpen(false);
          setCurrentlyOpenCard(null);
        }}
      >
        <Box sx={{ padding: "180px 70px 70px 430px" }}>
          <iframe width="500" height="350" src={currentlyOpenCard?.link} />
        </Box>
      </Modal>

      {/* edit details modal*/}
      <Modal
        open={isEditDetailsModalOpen}
        onClose={() => {
          setIsEditDetailsModalOpen(false);
          setCurrentlyOpenCard(null);
        }}
      >
        <Grid
          sx={{
            width: 400,
            height: 400,
            backgroundColor: "white",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
          container
          direction="column"
          spacing={12}
        >
          <Grid item>
            <TextField
              value={currentlyOpenCard?.name}
              placeholder="Enter name"
              onChange={(e) => {
                if (currentlyOpenCard && currentlyOpenCard !== null)
                  setCurrentlyOpenCard({
                    ...currentlyOpenCard,
                    name: e.target.value,
                  });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              value={currentlyOpenCard?.link}
              placeholder="Enter link"
              onChange={(e) => {
                if (currentlyOpenCard && currentlyOpenCard !== null)
                  setCurrentlyOpenCard({
                    ...currentlyOpenCard,
                    link: e.target.value,
                  });
              }}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                onUpdate(currentlyOpenCard?.id, currentlyOpenCard?.category);
                setIsEditDetailsModalOpen(false);
                setCurrentlyOpenCard(null);
                intitalizeData();
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Modal>
      {/* create card modal*/}
      <Modal
        open={iscreateCardModalOpen}
        onClose={() => {
          setIsCreateCardModalOpen(false);
          setCurrentlyOpenCard(null);
        }}
      >
        <Grid
          sx={{
            width: 400,
            height: 400,
            backgroundColor: "white",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
          container
          direction="column"
          spacing={12}
        >
          <Grid item>
            <TextField
              placeholder="Enter name"
              value={cardCreationPayload?.name}
              onChange={(e) => {
                setCardCreationPayload({
                  ...cardCreationPayload,
                  name: e.target.value,
                });
              }}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              placeholder="Enter link"
              value={cardCreationPayload?.link}
              onChange={(e) => {
                setCardCreationPayload({
                  ...cardCreationPayload,
                  link: e.target.value,
                });
              }}
            ></TextField>
          </Grid>
          <Grid item>
            <Button
              onClick={async () => {
                await axios.post(
                  `http://localhost:3001/${cardCreationPayload?.category}`,
                  { id: new Date().valueOf(), ...cardCreationPayload },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                setIsCreateCardModalOpen(false);
                intitalizeData();
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Modal>

      {/* On shift category */}

      <Modal
        open={isShiftCategoryModalOpen}
        onClose={() => {
          setIsShiftCategoryModalOpen(false);
        }}
      >
        <Grid
          sx={{
            width: 300,
            height: 165,
            backgroundColor: "white",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography>Select category to be moved</Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={shiftedCategory}
            label="Age"
            sx={{ width: 120, border: " 1px solid black" }}
            onChange={(e) => {
              setShiftedCategory(e.target.value);
            }}
          >
            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"education"}>Education</MenuItem>
            <MenuItem value={"motivation"}>Motivation</MenuItem>
          </Select>
          <Button
            sx={{
              display: "table",
              marginTop: "10px",
              marginLeft: 50,
            }}
            variant="contained"
            onClick={async () => {
              console.log(shiftedCategory);
              console.log(currentlyOpenCard);
              await axios.post(
                `http://localhost:3001/${shiftedCategory}`,
                {
                  ...currentlyOpenCard,
                  id: new Date().valueOf(),
                  category: shiftedCategory,
                  timesPlayed: 0,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              await axios.delete(
                `http://localhost:3001/${currentlyOpenCard?.category}/${currentlyOpenCard?.id}`,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              setIsShiftCategoryModalOpen(false);
              intitalizeData();
            }}
          >
            Move
          </Button>
        </Grid>
      </Modal>

      <Grid container item>
        <Typography> {`Entertainment Bucket`}</Typography>
        <Button
          onClick={() => {
            setIsCreateCardModalOpen(true);
            setCardCreationPayload({
              ...cardCreationPayload,
              category: "entertainment",
            });
          }}
          variant="contained"
          sx={{ marginBottom: 4, marginLeft: 4 }}
        >
          Add entertainment card
        </Button>
        <CardList
          cardList={entertainmentBucket}
          key={"entertainmecontainernt-card-list"}
          onUpdateClick={onUpdate}
          onDeleteClick={onDelete}
          onIframeClick={onIframeClick}
          onEditClick={onEditClick}
          onShiftCategory={onShiftCategoryClick}
        />
      </Grid>
      <Grid container item>
        <Typography> {`Education Bucket`}</Typography>
        <Button
          onClick={() => {
            setIsCreateCardModalOpen(true);
            setCardCreationPayload({
              ...cardCreationPayload,
              category: "education",
            });
          }}
          variant="contained"
          sx={{ marginBottom: 4, marginLeft: 4 }}
        >
          Add education card
        </Button>
        <CardList
          cardList={educationBucket}
          key={"education-card-list"}
          onUpdateClick={onUpdate}
          onDeleteClick={onDelete}
          onIframeClick={onIframeClick}
          onEditClick={onEditClick}
          onShiftCategory={onShiftCategoryClick}
        />
      </Grid>
      <Grid container item>
        <Typography> {`Motivation Bucket`}</Typography>
        <Button
          onClick={() => {
            setIsCreateCardModalOpen(true);
            setCardCreationPayload({
              ...cardCreationPayload,
              category: "motivation",
            });
          }}
          variant="contained"
          sx={{ marginBottom: 4, marginLeft: 4 }}
        >
          Add motivation card
        </Button>
        <CardList
          cardList={motivationBucket}
          key={"motivation-card-list"}
          onUpdateClick={onUpdate}
          onDeleteClick={onDelete}
          onIframeClick={onIframeClick}
          onEditClick={onEditClick}
          onShiftCategory={onShiftCategoryClick}
        />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
