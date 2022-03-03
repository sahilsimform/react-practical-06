import React, { useEffect, useState } from "react";
import { fetchUsers } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

import "./Home.css";
import { BiLock } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const Home = () => {
  const [first_name, setFirst_name] = useState("Sahil");
  const [last_name, setLast_name] = useState("Singh");
  const [email, setEmail] = useState("sahil@test.com");
  const [myid, setMyid] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);
  const isLoading = useSelector((state) => state.reducer.loading);

  const onHoverHandler = (data, index) => {
    setEmail(data.email);
    setFirst_name(data.first_name);
    setLast_name(data.last_name);
    setMyid(index);
  };

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page, dispatch]);

  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-10  parent_div ">
          <div className="col-md-11 ">
            <div className="col-md-12 shadow main_div ">
              <div className="col-md-10  ">
                <div className="row title_div">
                  <div className="col">
                    <h6>Name</h6>
                  </div>
                  <div className="col">
                    <h6>Status</h6>
                  </div>
                  <div className="col">
                    <h6>Access</h6>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-1 img_div">
                    <img
                      src={`https://reqres.in/img/faces/11-image.jpg`}
                      alt="img"
                    />
                  </div>
                  <div className="col-3 name_div">
                    <h6 className="name_div_h6">Sahil Singh</h6>
                    <h6 className="email_div_h6">sahil@test.com</h6>
                  </div>

                  <div className="col-4 status_div">
                    <h6>Active</h6>
                  </div>
                  <div className="col-1 owner_div">
                    <h6>Owner</h6>
                  </div>
                  <div className="col-1 lock_div">
                    <BiLock className="bilock_img" />
                  </div>
                </div>

                {isLoading || !responseData ? (
                  <h1>Loading...</h1>
                ) : (
                  responseData.map((data, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => {
                        onHoverHandler(data, index);
                      }}
                    >
                      <div className="row mt-3">
                        <div className="col-1 img_div_user">
                          <img src={data.avatar} alt="img" />
                        </div>
                        <div className="col-3 name_div_user">
                          <h6 className="name_div_h6_user">
                            {`${data.first_name} ${data.last_name}`}
                          </h6>
                          <h6 className="email_div_h6_user">{data.email}</h6>
                        </div>

                        <div className="col-4 status_div_user">
                          <select className="status_select">
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                        <div className="col-1 owner_div_user">
                          <select className="access_select">
                            <option value="Manager">Manager</option>
                            <option value="Read">Read</option>
                          </select>
                        </div>
                        <div className="col-1 delete_div_user">
                          <BsTrash
                            className="delete_img_user"
                            // onClick={() => deleteContact(data.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}

                <div className="page_btn_div">
                  <ul className="pagination">
                    <li>
                      <span onClick={() => setPage(1)}>1</span>
                    </li>
                    <li>
                      <span onClick={() => setPage(2)}>2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 box_main shadow">
            <div className="">
              <img
                className="box_img"
                src={`https://reqres.in/img/faces/${myid + 1}-image.jpg`}
                alt="img"
              />
            </div>
            <div className="box_name">
              <h4 className="box_name_h4">
                {`${first_name} ${last_name}`}
                <span className="dot"></span>
              </h4>
            </div>
            <div className="box_email">
              <h5 className="box_email_h4">{email}</h5>
            </div>
            <div className="box_plan">
              <h5 className="box_plan_h5">Your Plan: Standard</h5>
            </div>
            <div className="box_active_user">
              <button className="box_active_user_btn">
                <b>Active User</b>
              </button>
            </div>
            <div>
              <h6 className="box_active_user_plan ">Plan Uses</h6>
              <div className="pro_bar_div">
                <div className="main-bar">
                  <div className="second-bar progress"></div>
                </div>
              </div>
            </div>
            <div className="row mx-3 mt-3">
              <div className="col click_review ">
                <h4>
                  <b>2,250</b>
                </h4>
                <p className="click_review_p">Clicks reviewed</p>
              </div>

              <div className="col month_click ">
                <h4>
                  <b>5000</b>
                </h4>
                <p className="click_review_p">Monthly clicks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
