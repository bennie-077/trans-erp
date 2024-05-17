import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "12123",
      date: "1 May",
      truck: "KDB 822L",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Ongoing",
    },
    {
      id: "12124",
      date: "1 May",
      truck: "KDB 822K",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Offloaded",
    },
    {
      id: "12125",
      date: "1 May",
      truck: "KDB 822M",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Completed",
    },
    {
      id: "12126",
      date: "1 May",
      truck: "KDB 822N",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Ongoing",
    },
    {
      id: "12127",
      date: "1 May",
      truck: "KDB 822O",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Offloaded",
    },
    {
      id: "12128",
      date: "1 May",
      truck: "KDB 822P",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Completed",
    },
    {
      id: "12129",
      date: "1 May",
      truck: "KDB 822Q",
      from: "Mombasa",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Offloaded",
    },
    {
      id: "12133",
      date: "1 May",
      truck: "KDB 822R",
      from: "Mombasa",
      to: "Rwanda",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Ongoing",
    },
    {
      id: "12143",
      date: "1 May",
      truck: "KDB 822S",
      from: "Mombasa",
      to: "Kampala",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Completed",
    },
    {
      id: "12153",
      date: "1 May",
      truck: "KDB 822T",
      from: "Nairobi",
      to: "Juba",
      client: "Ben",
      amount: "1000",
      container: "KJSU8761542",
      status: "Ongoing",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Trip Id</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Truck</TableCell>
            <TableCell className="tablecell">From</TableCell>
            <TableCell className="tablecell">To</TableCell>
            <TableCell className="tablecell">Client</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Container No</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id} //trip id
            >
              <TableCell className="tablecell" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.truck}</TableCell>
              <TableCell className="tablecell">{row.from}</TableCell>
              <TableCell className="tablecell">{row.to}</TableCell>
              <TableCell className="tablecell">{row.client}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.container}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;