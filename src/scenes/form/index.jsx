import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
 
  // Initial state for circle properties
  const initialCircleProps = [
    { color: "red", blink: true, text: "Fuel alarm", text2: "!Warning! code 8454" },
    { color: "green", blink: false, text: "Pressure alarm", text2: "No alarm" },
    { color: "green", blink: false, text: "Water alarm" , text2: "No alarm"},
    { color: "green", blink: false, text: "Depth alarm", text2: "No alarm" },
    { color: "red", blink: true, text: "Temperature alarm" , text2: "!Warning! code 4354"},
    { color: "green", blink: false, text: "Water alarm", text2: "No alarm" },
    { color: "green", blink: false, text: "Bilge alarm" , text2: "No alarm"},
    { color: "red", blink: true, text: "Fire alarm", text2: "!Warning! code 83544" },
  ];

  // State to manage circle properties
  const [circleProps, setCircleProps] = useState(initialCircleProps);
  const [timer, setTimer] = useState(10); // Countdown timer starts at 10 seconds

  const handleActionButtonClick = () => {
    // Update all circles to green and not blinking
    setCircleProps((prevProps) => {
      const newProps = [...prevProps];
      newProps.forEach((circle, index) => {
        newProps[index] = { ...circle, color: "green", blink: false, text2 : "No alarm"};
      });
      setTimer(2); // Reset timer to 5 seconds
      return newProps;
    });
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Decrease timer every second

      return () => clearInterval(interval); // Cleanup on component unmount or timer change
    } else {
      // Reset specific circles to their original state after the timer runs out
      setCircleProps((prevProps) => {
        const newProps = [...prevProps];
        newProps[2] = { color: "red", blink: true, text: "Water alarm",text2: "!Warning! code Water"  };
        newProps[7] = {  color: "red", blink: true, text: "Fire alarm", text2: `!Warning! code <a href="https://haes-tech.com/app/uploads/2019/08/Esento-Marine-2-4-Manual-1.pdf" target="_blank" rel="noopener noreferrer"style="color:yellow;">83544</a>` }; // Change back to original state
        return newProps;
      });
    }
  }, [timer]);

  return (
    <Box m="20px">
      <Header title="ALARM STATUS" subtitle="Check the status of your alarms" />

      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, 1fr)" // 4 columns
        sx={{
          "& > div": { gridColumn: isNonMobile ? "span 1" : "span 4" },
        }}
      >
        {circleProps.map((circle, index) => (
          <CircleBox key={index} color={circle.color} blink={circle.blink} text={circle.text} text2={circle.text2}/>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt="20px">
        <Button color="secondary" variant="contained" onClick={handleActionButtonClick}>
          Reset alarms
        </Button>
      </Box>
    </Box>
  );
};

const CircleBox = ({ color, blink, text, text2 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (blink) {
      const interval = setInterval(() => {
        setIsVisible((prev) => !prev);
      }, 500); // Blink every 500ms
      return () => clearInterval(interval);
    } else {
      setIsVisible(true); // Ensure the circle is visible if not blinking
    }
  }, [blink]);

  return (
    <Box
      sx={{
        padding: "32px", // Increased padding
        border: "1px solid #ccc",
        borderRadius: "4px",
        textAlign: "center",
        borderColor: "gray", // Change the border color here
        minHeight: "150px", // Increased height for the box
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", // Aligns the circle to the bottom
        alignItems: "center",
      }}
    >
      <div>{text}</div> {/* Display individual text */}
      <Box
        sx={{
          width: "40px", // Width of the circle
          height: "40px", // Height of the circle
          borderRadius: "50%", // Makes it a circle
          backgroundColor: color, // Circle color
          mt: "16px", // Margin-top to space it from the text
          opacity: isVisible ? 1 : 0, // Controls visibility for blinking effect
          transition: "opacity 0.5s", // Smooth transition for blinking
        }}
      />
      
      {/* Render HTML safely in text2 */}
      <div
        style={{ color: color === "red" ? "red" : "green" }}
        dangerouslySetInnerHTML={{ __html: text2 }}
      />
    </Box>
  );
};


export default Form;
