import d1 from "./delete.json";
import d2 from "./fetch-filter-data.json";
import d3 from "./fetch-plays-filter.json";
import d4 from "./fetch-plays-paginated.json";
import d5 from "./fetch-plays-sorted.json";
import d6 from "./fetch-plays.json";
import d7 from "./insert.json";
import d8 from "./update.json";
import d9 from "./fetch-plays-featured.json";
export const getJsonStrings = () => {
  const res = [];
  [...d1, ...d2, ...d3, ...d4, ...d5, ...d6, ...d7, ...d8, ...d9].forEach(
    (d) => {
      res.push({
        name: d.display,
        value: d,
      });
    }
  );
  return res;
  //   const promises = [];
  //   promises.push(
  //     fetch("./delete.json").then((res) => {
  //       return res;
  //     })
  //   );
  //   promises.push(fetch("/fetch-filter-data.json"));
  //   promises.push(fetch("/fetch-plays-filter.json"));
  //   promises.push(fetch("/fetch-plays-paginated.json"));
  //   promises.push(fetch("/fetch-plays-sorted.json"));
  //   promises.push(fetch("/fetch-plays.json"));
  //   promises.push(fetch("/insert.json"));
  //   promises.push(fetch("/update.json"));

  //   return Promise.all(promises).then((allSegs) => {
  //     let res = [];
  //     allSegs.forEach((segs) => {
  //       segs.forEach((seg) => {
  //         res.push({
  //           name: JSON.parse(seg).display,
  //           value: seg,
  //         });
  //       });
  //     });
  //     return res;
  //   });
};
