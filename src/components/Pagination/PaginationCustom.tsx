import {
  Pagination,
  Stack,
  InputLabel,
  MenuItem,
  Grid,
  FormControl,
  Select,
} from "@mui/material";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;

  numberOfPages: number;
};

function PaginationCustom({
  setPage,
  page,
  pageSize,
  setPageSize,

  numberOfPages,
}: PaginationProps) {
  return (
    <Stack
      direction="column"
      alignItems="flex-end"
      spacing={2}
      sx={{ mb: 2, mt: 2 }}
    >
      <Grid display="flex" alignItems="center">
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Results per page
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={pageSize}
            label="Results per page"
            sx={{ height: 35, width: 120 }}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 30, 50, 100].map((option, index) => (
              <MenuItem value={option} key={index}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Pagination
          page={page}
          onChange={(_e, page) => {
            console.log(page);
            setPage(page);
          }}
          count={numberOfPages}
          shape="rounded"
        />
      </Grid>
    </Stack>
  );
}

export default PaginationCustom;
