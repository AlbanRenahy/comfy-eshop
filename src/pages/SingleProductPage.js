import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

import { Loading, Error } from "../components";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <h4>SingleProduct page</h4>;
};
export default SingleProductPage;
