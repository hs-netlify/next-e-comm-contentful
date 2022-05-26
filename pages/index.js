import Head from "next/head";
import Image from "next/image";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <div>
      <Grid>
        <div className="border rounded m-4 p-2">Something</div>
        <div className="border rounded m-4 p-2">Something else</div>
      </Grid>
    </div>
  );
}
