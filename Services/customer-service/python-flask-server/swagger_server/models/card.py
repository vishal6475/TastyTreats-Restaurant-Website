# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Card(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, cust_id: int=None, cust_name: str=None, card_number: str=None, card_expiry: str=None, primary: str=None):  # noqa: E501
        """Card - a model defined in Swagger

        :param id: The id of this Card.  # noqa: E501
        :type id: int
        :param cust_id: The cust_id of this Card.  # noqa: E501
        :type cust_id: int
        :param cust_name: The cust_name of this Card.  # noqa: E501
        :type cust_name: str
        :param card_number: The card_number of this Card.  # noqa: E501
        :type card_number: str
        :param card_expiry: The card_expiry of this Card.  # noqa: E501
        :type card_expiry: str
        :param primary: The primary of this Card.  # noqa: E501
        :type primary: str
        """
        self.swagger_types = {
            'id': int,
            'cust_id': int,
            'cust_name': str,
            'card_number': str,
            'card_expiry': str,
            'primary': str
        }

        self.attribute_map = {
            'id': 'id',
            'cust_id': 'cust_id',
            'cust_name': 'cust_name',
            'card_number': 'card_number',
            'card_expiry': 'card_expiry',
            'primary': 'primary'
        }
        self._id = id
        self._cust_id = cust_id
        self._cust_name = cust_name
        self._card_number = card_number
        self._card_expiry = card_expiry
        self._primary = primary

    @classmethod
    def from_dict(cls, dikt) -> 'Card':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Card of this Card.  # noqa: E501
        :rtype: Card
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Card.


        :return: The id of this Card.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Card.


        :param id: The id of this Card.
        :type id: int
        """

        self._id = id

    @property
    def cust_id(self) -> int:
        """Gets the cust_id of this Card.


        :return: The cust_id of this Card.
        :rtype: int
        """
        return self._cust_id

    @cust_id.setter
    def cust_id(self, cust_id: int):
        """Sets the cust_id of this Card.


        :param cust_id: The cust_id of this Card.
        :type cust_id: int
        """

        self._cust_id = cust_id

    @property
    def cust_name(self) -> str:
        """Gets the cust_name of this Card.


        :return: The cust_name of this Card.
        :rtype: str
        """
        return self._cust_name

    @cust_name.setter
    def cust_name(self, cust_name: str):
        """Sets the cust_name of this Card.


        :param cust_name: The cust_name of this Card.
        :type cust_name: str
        """

        self._cust_name = cust_name

    @property
    def card_number(self) -> str:
        """Gets the card_number of this Card.


        :return: The card_number of this Card.
        :rtype: str
        """
        return self._card_number

    @card_number.setter
    def card_number(self, card_number: str):
        """Sets the card_number of this Card.


        :param card_number: The card_number of this Card.
        :type card_number: str
        """

        self._card_number = card_number

    @property
    def card_expiry(self) -> str:
        """Gets the card_expiry of this Card.


        :return: The card_expiry of this Card.
        :rtype: str
        """
        return self._card_expiry

    @card_expiry.setter
    def card_expiry(self, card_expiry: str):
        """Sets the card_expiry of this Card.


        :param card_expiry: The card_expiry of this Card.
        :type card_expiry: str
        """

        self._card_expiry = card_expiry

    @property
    def primary(self) -> str:
        """Gets the primary of this Card.


        :return: The primary of this Card.
        :rtype: str
        """
        return self._primary

    @primary.setter
    def primary(self, primary: str):
        """Sets the primary of this Card.


        :param primary: The primary of this Card.
        :type primary: str
        """

        self._primary = primary