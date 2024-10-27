import Race from '../../src/Race.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR_ERROR } from '../../src/util/constant.js';
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 입력 에러테스트', () => {
  const CAR_ERROR_CASES = [
    ['자동차 입력길이 5 초과', ['carrrrr,car'], CAR_ERROR.NOT_OVER_5],
    ['자동차의 개수 2 이하', ['car1'], CAR_ERROR.NOT_UNDER_2],
    ['자동차 이름 중복', ['car,car'], CAR_ERROR.NOT_DUPLICATE],
    ['자동차 이름 공백', [''], CAR_ERROR.NOT_BLANK],
  ];

  test.each(CAR_ERROR_CASES)(
    '(%s)',
    async (testName, inputArray, errorMessage) => {
      mockQuestions(inputArray);

      const race = new Race();

      await expect(race.processCars()).rejects.toThrow(errorMessage);
    }
  );
});
