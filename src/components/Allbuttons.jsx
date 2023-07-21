import Button from "./Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Allbuttons() {
  return (
    <div>
      <h2 className="devheading">Dev Challenges Buttons</h2>
      <div className="center">
        <div className="left">
          <Button Title={"<Button />"} />
          <Button variant={"outline"} Title={"<Button  variant='outline'/>"} />
          <Button variant={"text"} Title={"<Button variant='text'/>"} />
          <Button
            variant={"leftIcon"}
            Title={"<Button disableShadow/>"}
            disableShadwo
          />
          <Button Title={"<Button disabled/>"} variant={"disabled"} disabled />

          <Button
            variant={"leftIcon"}
            Title={"<Button muIcon='AddShoppingCartIcon'/>"}
            leftIcon={<AddShoppingCartIcon fontSize="14px" />}
          />
          <Button Title={"<Button size='sm'/>"} variant={"sm"} />
          <Button Title={"<Button color='default'/>"} />
          <Button Title={"<Button color='default'/>"} variant={"lastbox"} />
        </div>
        <div className="right">
          <Button Title={"&:hover, &:focus"} variant={"hoverb"} />
          <Button Title={"&:hover, &:focus"} variant={"outline2"} />
          <Button Title={"&:hover, &:focus"} variant={"outline3"} />
          <Button
            variant={"text2"}
            Title={"<Button variant='text' disabled/>"}
            disbaled
          />
          <div style={{ height: "85px" }}></div>
          <Button
            variant={"leftIcon"}
            Title={"<Button muIcon='AddShoppingCartIcon'/>"}
            rightIcon={<AddShoppingCartIcon fontSize="14px" />}
          />

          <div
            style={{
              display: "flex",
              gap: "50px",
              marginTop: "-40px",
              marginBottom: "-30px",
            }}
          >
            <Button Title={"<Button size='md'/>"} variant={"md"} />
            <Button Title={"<Button size='lg'/>"} variant={"lg"} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "50px",
              marginTop: "-40px",
              marginBottom: "-30px",
            }}
          >
            <Button Title={"<Button color='primary'/>"} variant={"md"} />
            <Button Title={"<Button color='secondary'/>"} variant={"sd"} />
            <Button Title={"<Button color='Danger'/>"} variant={"xd"} />
          </div>

          <div
            style={{
              display: "flex",
              gap: "50px",
              marginTop: "-40px",
              marginBottom: "-30px",
            }}
          >
            <Button variant={"lb2"} />
            <Button variant={"lb3"} />
            <Button variant={"lb4"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allbuttons;
