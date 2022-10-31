
import time
from unittest import TestCase

from flaskapp.src.Model.control_db import find_all_good_by_id, find_entp, find_price_by_id, find_all_good_category, \
    update_price
from flaskapp.src.Model.openapi import load_good, trans_jsonfile
from flaskapp.src.Service.address import update_entp_position, find_near_entp


class Test(TestCase):
    def test_update_pos(self):
        start = time.time()
        update_entp_position()
        end = time.time()
        print(f"{end - start:.5f} sec")

    def test_price_info(self):
        start = time.time()
        good_id_list =find_all_good_by_id()

        # 지관 좌표
        # near_entp = find_near_entp((37.29640641606932,126.9776123527779),5)
        near_entp = find_near_entp(( 37.265903839248956, 126.9999098091105), 5)

        # 필요한 상품 list에 따른 주변 매장 상품 가격 정보
        find_price_by_id(good_id_list,near_entp)
        end = time.time()
        print(f"{end - start:.5f} sec")


    def test_update(self):
        # trans_jsonfile("20220909")
        update_price("20220923")
        update_price("20221007")
        update_price("20221021")


