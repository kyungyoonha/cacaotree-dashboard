import React from "react";
import Content from "@/components/Content";
import { Form, Col, DatePicker, Row, Radio, RadioChangeEvent } from "antd";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { useUIContext } from "@/contexts/contextUI";

const options = [
  { label: "전체보기", value: "all" },
  { label: "요약보기", value: "short" },
];

const BookingFilter = () => {
  const {
    filterBookingDate,
    filterColumnOption,
    onChangeFilterBookingDate,
    onChangeFilterColumnOption,
    dispatch,
  } = useUIContext();

  const onChangeDate = (value: Dayjs | null) => {
    if (!value) return;
    onChangeFilterBookingDate(value, dispatch);
  };

  const onChangeRadio = ({ target: { value } }: RadioChangeEvent) => {
    onChangeFilterColumnOption(value, dispatch);
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Content
            style={{
              padding: "25px 24px 5px",
              minHeight: "50px",
              width: "100%",
              display: "flex",
              flexDirect: "column",
            }}
          >
            <Row gutter={[16, 16]} style={{ width: "100%" }}>
              <Col xs={24} md={12} lg={8}>
                <Form.Item
                  label="날짜선택"
                  tooltip="조회하고 싶은 날짜를 선택해주세요."
                >
                  <DatePicker
                    value={dayjs(filterBookingDate)}
                    format="YYYY-MM-DD"
                    onChange={onChangeDate}
                    placeholder="날짜를 선택해주세요."
                    style={{ width: "200px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <Radio.Group
                  options={options}
                  onChange={onChangeRadio}
                  value={filterColumnOption}
                  optionType="button"
                  style={{ marginBottom: "15px" }}
                />
              </Col>
            </Row>
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
