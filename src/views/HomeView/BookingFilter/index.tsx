import React from "react";
import Content from "@/components/Content";
import { Form, Col, DatePicker, Row } from "antd";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { useUIContext } from "@/contexts/contextUI";

const BookingFilter = () => {
  const { bookingFilterDate, onChangeBookingFilterDate, dispatch } =
    useUIContext();
  const onChangeDate = (value: Dayjs | null) => {
    if (!value) return;
    onChangeBookingFilterDate(value, dispatch);
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Content style={{ padding: "25px 24px 5px", minHeight: "50px" }}>
            <Form.Item
              label="날짜선택"
              tooltip="조회하고 싶은 날짜를 선택해주세요."
            >
              <DatePicker
                value={dayjs(bookingFilterDate)}
                format="YYYY-MM-DD"
                onChange={onChangeDate}
                placeholder="날짜를 선택해주세요."
                style={{ width: "200px" }}
              />
            </Form.Item>
          </Content>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default BookingFilter;

const Label = styled.label`
  margin-bottom: 10px;
`;
