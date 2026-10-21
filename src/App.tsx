import { useState } from "react";
import styled from "styled-components";

import { Button } from "./components/button/Button";
import { Label } from "./components/labels/Label";
import { Text } from "./components/Text/Text";
import { Dropdown } from "./components/dropdown/Dropdown";
import { RadioButton } from "./components/RadioButton/RadioButton";
import { Img } from "./components/Img/Img";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { Card } from "./components/Card/Card";
import { Table } from "./components/Table/Table";
import { TableHeader } from "./components/TableHeader/TableHeader";
import { TableRow } from "./components/TableRow/TableRow";
import { TableCell } from "./components/TableCell/TableCell";
import { TableFooter } from "./components/TableFooter/TableFooter";

const Page = styled.main`
  max-width: 760px;
  margin: 0 auto;
  padding: 24px 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Section = styled.section`
  margin-top: 28px;

  h2 {
    margin-bottom: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: start;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`;

const Toggle = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-weight: 600;
  cursor: pointer;
`;

const BannerExample = styled.div`
  img { height: 140px; }
  h2 { font-size: 1.4rem; }
`;

const sampleImage =
  "data:image/svg+xml," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg"
         width="1200" height="400" viewBox="0 0 1200 400">
      <rect width="1200" height="400" fill="#dbeafe"/>
      <circle cx="1000" cy="90" r="50" fill="#fbbf24"/>
      <path d="M0 400 L350 80 L700 400 Z" fill="#15803d"/>
      <path d="M450 400 L850 140 L1200 400 Z" fill="#166534"/>
    </svg>
  `);

const componentNames = ["Button", "Dropdown", "Card"];

function App() {
  const [disabled, setDisabled] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [fruit, setFruit] = useState("apple");
  const [delivery, setDelivery] = useState("standard");

  return (
    <Page>
      <h1>Rosie's UI Garden</h1>
      <p>Assignment 12 · Component Library</p>

      <Toggle>
        <input
          type="checkbox"
          checked={disabled}
          onChange={(event) => setDisabled(event.target.checked)}
        />
        Disable showcase components
      </Toggle>

      <BannerExample>
      <HeroImage
        src={sampleImage}
        alt="Green mountains beneath a sunny sky"
        heading="Hero Image"
        description="A simple image banner."
        disabled={disabled}
      />

      </BannerExample>

      <Section aria-labelledby="controls-heading">
        <h2 id="controls-heading">Form controls</h2>

        <Grid>
          <Stack>
            <Button
              label="Click me"
              disabled={disabled}
              onClick={() => setClicks((count) => count + 1)}
            />
            <p role="status">Button clicks: {clicks}</p>
          </Stack>

          <Stack>
            <Label
              text="Choose a fruit"
              htmlFor="fruit"
              disabled={disabled}
            />

            <Dropdown
              id="fruit"
              aria-label="Choose a fruit"
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "orange", label: "Orange" },
              ]}
              value={fruit}
              onChange={(event) => setFruit(event.target.value)}
              disabled={disabled}
            />


          </Stack>

          <Stack role="group" aria-label="Delivery options">
            <RadioButton
              label="Standard delivery"
              name="delivery"
              value="standard"
              checked={delivery === "standard"}
              onChange={() => setDelivery("standard")}
              disabled={disabled}
            />

            <RadioButton
              label="Express delivery"
              name="delivery"
              value="express"
              checked={delivery === "express"}
              onChange={() => setDelivery("express")}
              disabled={disabled}
            />


          </Stack>
        </Grid>
      </Section>

      <Section aria-labelledby="content-heading">
        <h2 id="content-heading">Content</h2>

        <Grid>
          <Text
            text="This is a text component."
            backgroundColor="#eff6ff"
            disabled={disabled}
          />

          <Img
            src={sampleImage}
            alt="Illustrated mountain landscape"
            disabled={disabled}
          />

          <Card
            heading="Card"
            description="A simple card with a title and description."
            disabled={disabled}
          />
        </Grid>
      </Section>

      <Section aria-labelledby="table-heading">
        <h2 id="table-heading">Table</h2>

        <Table disabled={disabled}>
          <caption>Example components</caption>

          <TableHeader disabled={disabled}>
            <TableRow disabled={disabled}>
              <TableCell header disabled={disabled}>
                Component
              </TableCell>
              <TableCell header disabled={disabled}>
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <tbody>
            {componentNames.map((name) => (
              <TableRow key={name} disabled={disabled}>
                <TableCell disabled={disabled}>{name}</TableCell>
                <TableCell disabled={disabled}>Implemented</TableCell>
              </TableRow>
            ))}
          </tbody>

          <TableFooter disabled={disabled}>
            <TableRow disabled={disabled}>
              <TableCell colSpan={2} disabled={disabled}>
                Total: {componentNames.length} examples
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </Page>
  );
}

export default App;