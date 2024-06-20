import FoodCard from "@/components/FoodCard";
import FoodForm from "@/components/FoodForm";
import BaseLayout from "@/layouts/BaseLayout";
import axios from "axios";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
    headers: {
      apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
    },
  });
  const data = resp.data.data;
  return { props: { food: data } };
}

export default function FoodDetails({ food }) {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center">
        <FoodCard food={food} />
        <FoodForm isEdit={true} defaultFormData={{ name: food.name, imageUrl: food.imageUrl }} />
        <button
          onClick={() => {
            axios.delete(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`, {
              headers: {
                apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
              },
            }).then(() => {
              // Redirect to the homepage after successful deletion
              window.location.href = '/'; // You can replace '/' with the actual URL of your homepage
            }).catch(error => {
              console.error("Error deleting food item:", error);
            });
          }}
          className="px-4 py-1 text-white bg-red-500 rounded-full"
        >
          Delete
        </button>
      </div>
      </BaseLayout>
          );
        }
