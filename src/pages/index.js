import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Jobs from "../../src/components/jobs/jobs";
import JobType from "../components/job-type/job-type";
import Layout from "../components/layout/layout";
import Location from "../components/location/location";
import Search from "../components/search/search";

export default function Home() {
  const [location, setLocation] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isFullTime, setIsFullTime] = useState(false);
  const [isLocation, setIsLocation] = useState("");
  const [isDescription, setIsDescription] = useState("");

  const router = useRouter();

  const searchString = [
    `?location=${isLocation}`,
    `${isDescription ? `&description=${isDescription}` : ""}`,
    `${isFullTime ? `&full_time=${isFullTime}` : ""}`,
  ].join("");

  const getNewSearch = async () => {
    setIsLoading(true);
    setIsDescription("");
    await router.push(`/${searchString}`);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getNewSearch();
  }, [isFullTime, isLocation]);

  return (
    <Layout>
      <div className={styles.input_container}>
        <div className={styles.input}>
          <Search
            placeholder="Title, companies, expertise or benefits"
            getNewSearch={getNewSearch}
            setIsDescription={setIsDescription}
          />
          <div className={styles.container}>
            <div className={styles.container_left}>
              <JobType
                // positions={filteredJobType}
                full_time={isFullTime}
                set_full_time={setIsFullTime}
              />
              <Location
                placeholder="City, state, zip code or country"
                location={location}
                positions={positions}
                isLocation={isLocation}
                setIsLocation={setIsLocation}
                onChange={setLocation}
              />
            </div>
            <div className={styles.container_right}>
              {isLoading ? "loading..." : <Jobs positions={positions} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps({
//   query: { location, description, full_time },
// }) {
//   const url = [
//     `https://jobs.github.com/positions.json?${
//       location ? `location=${location}` : ''
//     }`,
//     `${description ? `&description=${description}` : ''}`,
//     `${full_time ? `&full_time=${full_time}` : ''}`,
//   ].join('')

//   const res = await fetch(url)
//   const positions = await res.json()
//   return {
//     props: {
//       positions,
//     },
//   }
// }
