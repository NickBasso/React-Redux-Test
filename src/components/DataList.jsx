// @flow

import { useState, useEffect } from 'react';
import {
  addInitialItems,
  addMoreItems,
  removeItem,
} from '../redux/actionsCreators';
import { Table, Button } from 'antd';
import {
  fetchInitialItems,
  fetchMoreItems,
} from '../services/APIRequestService';
import { useSelector, useDispatch } from 'react-redux';

const tableColumns = [
  { title: 'ID', dataIndex: 'index', key: 'index' },
  { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Balance', dataIndex: 'balance', key: 'balance' },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'x',
  },
];

export const DataList = (): Object => {
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleAddInitialItems = (): undefined => {
    fetchInitialItems().then((response): Promise => {
      const data = response.map((el) => {
        el.action = (
          <Button
            onClick={() => {
              handleDeleteRow(el.key);
            }}
            type="primary"
          >
            Delete
          </Button>
        );
        return el;
      });

      dispatch(addInitialItems(data));
    });
  };

  const handleAddMore = (): undefined => {
    fetchMoreItems().then((response): Promise => {
      setLoading(true);

      const data = response.map((el) => {
        el.action = (
          <Button
            onClick={() => {
              handleDeleteRow(el.key);
            }}
            type="primary"
          >
            Delete
          </Button>
        );
        return el;
      });

      dispatch(addMoreItems(data));

      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  };

  const handleDeleteRow = (key): undefined => {
    dispatch(removeItem(key));
  };

  useEffect((): undefined => {
    handleAddInitialItems();
  }, [dispatch]);

  return (
    <>
      <Table
        columns={tableColumns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 7 }}
      />
      <Button
        onClick={handleAddMore}
        type="primary"
        loading={loading}
        danger
        size="large"
      >
        Add More
      </Button>
    </>
  );
};
