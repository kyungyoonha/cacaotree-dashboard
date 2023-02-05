import React from "react";
import { Form, Col, DatePicker, Row, Radio, Button } from "antd";
import Content from "@/components/Content";
import { useUIContext } from "@/contexts/contextUI";
import dayjs, { Dayjs } from "dayjs";
import useMutation from "@/libs/client/useMutation";

const ExpensesFilter = () => {
  const { filterExpensesDate, onChangeFilterExpensesDate, dispatch } =
    useUIContext();

  const [enter, { loading, data: aaa, error }] = useMutation(
    "/api/UpdateDailyReportDate"
  );

  const onClickButton = () => {
    enter({ date: filterExpensesDate });
  };

  const onChangeDate = (value: Dayjs | null) => {
    if (!value) return;
    onChangeFilterExpensesDate(value, dispatch);
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
            <Form.Item
              label="날짜선택"
              tooltip="조회하고 싶은 날짜를 선택해주세요."
              style={{ marginRight: "10px" }}
            >
              <DatePicker
                value={dayjs(filterExpensesDate)}
                format="YYYY-MM-DD"
                onChange={onChangeDate}
                placeholder="날짜를 선택해주세요."
                style={{ width: "200px" }}
              />
            </Form.Item>
            <Button type="primary" onClick={onClickButton}>
              변경하기
            </Button>
          </Content>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default ExpensesFilter;
